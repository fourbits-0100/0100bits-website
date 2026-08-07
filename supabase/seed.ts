import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { resolve } from 'path';
import { PAGE_SCHEMAS, DEFAULTS } from '../src/lib/content.js';

// Load env vars (we use .env or .env.local)
dotenv.config({ path: resolve(process.cwd(), '.env') });
dotenv.config({ path: resolve(process.cwd(), '.env.local') });

// Setup client - using the Service Role Key for seeding is better, 
// but since we only have ANON key and RLS is disabled or we are authenticated?
// Wait, the user wants us to run seed.ts. If we only have anon key, we can't write to tables since RLS is down for anon writes. 
// BUT we haven't applied RLS yet, or we'll bypass it if they provide service_role_key in their real env.
// For now, we seed via Anon KEY and assume RLS isn't enabled yet or we use the REST API.
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error("Missing SUPABASE URL or KEY");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
    console.log("Seeding site_settings...");
    const settings = DEFAULTS.settings || {};
    for (const [key, value] of Object.entries(settings)) {
        const { error } = await supabase
            .from('site_settings')
            .upsert({ key, value });
        if (error) console.error(`Error seeding settings [${key}]:`, error.message);
    }

    console.log("Seeding sections...");
    // Iterate through pages in PAGE_SCHEMAS
    for (const [page, schemas] of Object.entries(PAGE_SCHEMAS)) {
        let position = 0;
        for (const schema of schemas) {
            position += 10;

            const data = DEFAULTS[page]?.[schema.key] || {};

            const { error } = await supabase
                .from('sections')
                .upsert({
                    page,
                    section_key: schema.key,
                    label: schema.label,
                    position,
                    enabled: true,
                    data
                }, { onConflict: 'page, section_key' });

            if (error) console.error(`Error seeding section [${page}:${schema.key}]:`, error.message);
        }
    }

    console.log("Seeding complete.");
}

seed();
