import { z } from 'zod';

// Define the primitive types for the schema-driven editor
export type FieldType = 'text' | 'textarea' | 'list' | 'object_list' | 'icon_toggle';

export interface FieldSchema {
    name: string;
    type: FieldType;
    label: string;
    objectSchema?: Record<string, FieldSchema>; // For nested objects in lists
}

export interface SectionSchema {
    key: string;
    label: string;
    fields: FieldSchema[];
}

export const PAGE_SCHEMAS: Record<string, SectionSchema[]> = {
    home: [
        {
            key: 'hero',
            label: 'Hero Section',
            fields: [
                { name: 'title', type: 'text', label: 'Title Text' },
                { name: 'subtitle_lines', type: 'list', label: 'Subtitle Lines' },
                {
                    name: 'scroll_sections',
                    type: 'object_list',
                    label: 'Scroll Sections',
                    objectSchema: {
                        title: { name: 'title', type: 'text', label: 'Title' },
                        line1: { name: 'line1', type: 'text', label: 'Line 1' },
                        line2: { name: 'line2', type: 'text', label: 'Line 2' },
                        line3: { name: 'line3', type: 'text', label: 'Line 3' }
                    }
                }
            ]
        },
        {
            key: 'intro',
            label: 'Intro',
            fields: [
                { name: 'kicker', type: 'text', label: 'Kicker' },
                { name: 'heading', type: 'text', label: 'Heading Text' },
                { name: 'paragraphs', type: 'list', label: 'Paragraphs' },
                { name: 'callouts', type: 'list', label: 'Callouts' },
                {
                    name: 'closing',
                    type: 'object_list',
                    label: 'Closing Object (single item)',
                    objectSchema: {
                        line1: { name: 'line1', type: 'text', label: 'Line 1' },
                        line2: { name: 'line2', type: 'text', label: 'Line 2' },
                    }
                }
            ]
        },
        {
            key: 'beliefs',
            label: 'Beliefs',
            fields: [
                { name: 'kicker', type: 'text', label: 'Kicker' },
                { name: 'heading', type: 'text', label: 'Heading' },
                { name: 'items', type: 'list', label: 'Beliefs List' },
            ]
        },
        {
            key: 'principles',
            label: 'Principles',
            fields: [
                { name: 'kicker', type: 'text', label: 'Kicker' },
                { name: 'heading', type: 'text', label: 'Heading' },
                {
                    name: 'items',
                    type: 'object_list',
                    label: 'Principles Items',
                    objectSchema: {
                        title: { name: 'title', type: 'text', label: 'Title' },
                        details: { name: 'details', type: 'list', label: 'Details' }
                    }
                }
            ]
        },
        {
            key: 'philosophy',
            label: 'Philosophy',
            fields: [
                { name: 'kicker', type: 'text', label: 'Kicker' },
                { name: 'heading', type: 'text', label: 'Heading' },
                {
                    name: 'items',
                    type: 'object_list',
                    label: 'Philosophy Items',
                    objectSchema: {
                        title: { name: 'title', type: 'text', label: 'Title' },
                        desc: { name: 'desc', type: 'textarea', label: 'Description' }
                    }
                }
            ]
        },
        {
            key: 'capabilities',
            label: 'Capabilities',
            fields: [
                { name: 'kicker', type: 'text', label: 'Kicker' },
                { name: 'heading', type: 'text', label: 'Heading' },
                { name: 'intro', type: 'list', label: 'Intro Paragraphs' },
                {
                    name: 'items',
                    type: 'object_list',
                    label: 'Capabilities Items',
                    objectSchema: {
                        title: { name: 'title', type: 'text', label: 'Title' },
                        desc: { name: 'desc', type: 'textarea', label: 'Description' },
                        items: { name: 'items', type: 'list', label: 'Sub Items' },
                    }
                }
            ]
        },
        {
            key: 'methodology',
            label: 'Methodology',
            fields: [
                { name: 'kicker', type: 'text', label: 'Kicker' },
                { name: 'heading', type: 'text', label: 'Heading' },
                { name: 'intro', type: 'textarea', label: 'Intro' },
                {
                    name: 'steps',
                    type: 'object_list',
                    label: 'Steps',
                    objectSchema: {
                        num: { name: 'num', type: 'text', label: 'Number' },
                        title: { name: 'title', type: 'text', label: 'Title' },
                        desc: { name: 'desc', type: 'list', label: 'Description Paragraphs' },
                        items: { name: 'items', type: 'list', label: 'Sub Items' },
                    }
                }
            ]
        },
        {
            key: 'outcomes',
            label: 'Outcomes',
            fields: [
                { name: 'kicker', type: 'text', label: 'Kicker' },
                { name: 'heading', type: 'text', label: 'Heading' },
                { name: 'intro', type: 'list', label: 'Intro Paragraphs' },
                {
                    name: 'items',
                    type: 'object_list',
                    label: 'Items',
                    objectSchema: {
                        title: { name: 'title', type: 'text', label: 'Title' },
                        desc: { name: 'desc', type: 'textarea', label: 'Description' }
                    }
                }
            ]
        },
        {
            key: 'industries',
            label: 'Industries',
            fields: [
                { name: 'kicker', type: 'text', label: 'Kicker' },
                { name: 'heading', type: 'text', label: 'Heading' },
                { name: 'intro', type: 'textarea', label: 'Intro' },
                { name: 'quote', type: 'textarea', label: 'Quote' },
                { name: 'items', type: 'list', label: 'Industry Items' },
            ]
        },
        {
            key: 'why',
            label: 'Why',
            fields: [
                { name: 'kicker', type: 'text', label: 'Kicker' },
                { name: 'heading', type: 'text', label: 'Heading' },
                {
                    name: 'items',
                    type: 'object_list',
                    label: 'Items',
                    objectSchema: {
                        title: { name: 'title', type: 'text', label: 'Title' },
                        desc: { name: 'desc', type: 'textarea', label: 'Description' }
                    }
                }
            ]
        },
        {
            key: 'research',
            label: 'Research',
            fields: [
                { name: 'kicker', type: 'text', label: 'Kicker' },
                { name: 'heading', type: 'text', label: 'Heading' },
                { name: 'paragraphs', type: 'list', label: 'Paragraphs' },
                { name: 'quote', type: 'textarea', label: 'Quote' },
                { name: 'list_label', type: 'text', label: 'List Label' },
                { name: 'areas', type: 'list', label: 'Areas' },
            ]
        },
        {
            key: 'opensource',
            label: 'Open Source',
            fields: [
                { name: 'kicker', type: 'text', label: 'Kicker' },
                { name: 'heading', type: 'text', label: 'Heading' },
                { name: 'paragraphs', type: 'list', label: 'Paragraphs' },
                { name: 'quote', type: 'textarea', label: 'Quote' },
            ]
        },
        {
            key: 'manifesto',
            label: 'Manifesto',
            fields: [
                { name: 'kicker', type: 'text', label: 'Kicker' },
                { name: 'heading', type: 'text', label: 'Heading' },
                { name: 'lines', type: 'list', label: 'Lines' },
                {
                    name: 'closing',
                    type: 'object_list',
                    label: 'Closing Object (single item)',
                    objectSchema: {
                        line1: { name: 'line1', type: 'text', label: 'Line 1' },
                        line2: { name: 'line2', type: 'text', label: 'Line 2' },
                    }
                }
            ]
        },
        {
            key: 'contact_cta',
            label: 'Contact CTA',
            fields: [
                { name: 'kicker', type: 'text', label: 'Kicker' },
                { name: 'heading_lines', type: 'list', label: 'Heading Lines' },
                { name: 'paragraphs', type: 'list', label: 'Paragraphs' },
                { name: 'quote', type: 'textarea', label: 'Quote' },
                {
                    name: 'button',
                    type: 'object_list',
                    label: 'Button (single item)',
                    objectSchema: {
                        label: { name: 'label', type: 'text', label: 'Label' },
                        href: { name: 'href', type: 'text', label: 'Link' },
                    }
                },
                {
                    name: 'panel',
                    type: 'object_list',
                    label: 'Panel (single item)',
                    objectSchema: {
                        title: { name: 'title', type: 'text', label: 'Title' },
                        email: { name: 'email', type: 'text', label: 'Email' },
                        location: { name: 'location', type: 'text', label: 'Location' },
                        availability: { name: 'availability', type: 'text', label: 'Availability' },
                    }
                },
                {
                    name: 'process_steps',
                    type: 'list',
                    label: 'Process Steps'
                }
            ]
        }
    ],
    about: [
        {
            key: 'hero',
            label: 'About Hero',
            fields: [
                { name: 'title_lines', type: 'list', label: 'Title Lines' },
                { name: 'paragraph', type: 'textarea', label: 'Paragraph' }
            ]
        },
        {
            key: 'why_we_exist',
            label: 'Why We Exist',
            fields: [
                { name: 'heading', type: 'text', label: 'Heading' },
                { name: 'statements', type: 'list', label: 'Statements' }
            ]
        },
        {
            key: 'philosophy',
            label: 'Philosophy',
            fields: [
                { name: 'heading', type: 'text', label: 'Heading' },
                {
                    name: 'items',
                    type: 'object_list',
                    label: 'Philosophy Items',
                    objectSchema: {
                        title: { name: 'title', type: 'text', label: 'Title' },
                        desc: { name: 'desc', type: 'textarea', label: 'Description' }
                    }
                }
            ]
        },
        {
            key: 'the_name',
            label: 'The Name',
            fields: [
                { name: 'title', type: 'text', label: 'Title' },
                {
                    name: 'items',
                    type: 'object_list',
                    label: 'Items',
                    objectSchema: {
                        title: { name: 'title', type: 'text', label: 'Title' },
                        desc: { name: 'desc', type: 'textarea', label: 'Description' }
                    }
                }
            ]
        },
        {
            key: 'how_we_think',
            label: 'How We Think',
            fields: [
                { name: 'heading', type: 'text', label: 'Heading' },
                {
                    name: 'steps',
                    type: 'object_list',
                    label: 'Steps',
                    objectSchema: {
                        id: { name: 'id', type: 'text', label: 'ID' },
                        name: { name: 'name', type: 'text', label: 'Name' },
                        icon: { name: 'icon', type: 'text', label: 'Icon (Lucide)' }
                    }
                }
            ]
        },
        {
            key: 'manifesto',
            label: 'Manifesto',
            fields: [
                { name: 'heading', type: 'text', label: 'Heading' },
                { name: 'paragraph', type: 'textarea', label: 'Paragraph' }
            ]
        },
        {
            key: 'looking_forward',
            label: 'Looking Forward',
            fields: [
                { name: 'heading', type: 'text', label: 'Heading' },
                { name: 'paragraph', type: 'textarea', label: 'Paragraph' },
                {
                    name: 'cta',
                    type: 'object_list',
                    label: 'CTA (single item)',
                    objectSchema: {
                        label: { name: 'label', type: 'text', label: 'Label' },
                        href: { name: 'href', type: 'text', label: 'Link' },
                    }
                },
                { name: 'focus_cards', type: 'list', label: 'Focus Cards' },
            ]
        }
    ],
    solutions: [
        {
            key: 'hero',
            label: 'Solutions Hero',
            fields: [
                { name: 'title_lines', type: 'list', label: 'Title Lines' },
                { name: 'subtitle_lines', type: 'list', label: 'Subtitle Lines' }
            ]
        },
        {
            key: 'solutions',
            label: 'Solutions Focus',
            fields: [
                {
                    name: 'items',
                    type: 'object_list',
                    label: 'Solutions Items',
                    objectSchema: {
                        id: { name: 'id', type: 'text', label: 'ID' },
                        title: { name: 'title', type: 'text', label: 'Title' },
                        subtitle: { name: 'subtitle', type: 'text', label: 'Subtitle' },
                        desc: { name: 'desc', type: 'textarea', label: 'Description' },
                        icon: { name: 'icon', type: 'text', label: 'Icon (Lucide)' },
                        capabilities: { name: 'capabilities', type: 'list', label: 'Capabilities List' }
                        // We omit complex visual typing here for brevity as it's a JSON block
                    }
                }
            ]
        }
    ],
    contact: [
        {
            key: 'hero',
            label: 'Contact Hero',
            fields: [
                { name: 'title_lines', type: 'list', label: 'Title Lines' },
                { name: 'paragraph', type: 'textarea', label: 'Paragraph' }
            ]
        },
        {
            key: 'form',
            label: 'Contact Form',
            fields: [
                { name: 'step_questions', type: 'list', label: 'Step Questions' },
                { name: 'project_types', type: 'list', label: 'Project Types' },
                { name: 'timelines', type: 'list', label: 'Timelines' },
                { name: 'budgets', type: 'list', label: 'Budgets' },
                {
                    name: 'success',
                    type: 'object_list',
                    label: 'Success Msg (single item)',
                    objectSchema: {
                        title: { name: 'title', type: 'text', label: 'Title' },
                        message: { name: 'message', type: 'textarea', label: 'Message' },
                        button_label: { name: 'button_label', type: 'text', label: 'Button Label' },
                    }
                },
            ]
        },
        {
            key: 'channels',
            label: 'Channels',
            fields: [
                { name: 'heading', type: 'text', label: 'Heading' },
                {
                    name: 'items',
                    type: 'object_list',
                    label: 'Channels Items',
                    objectSchema: {
                        name: { name: 'name', type: 'text', label: 'Name' },
                        value: { name: 'value', type: 'text', label: 'Value' },
                        href: { name: 'href', type: 'text', label: 'Link' },
                        icon: { name: 'icon', type: 'text', label: 'Icon (Lucide)' },
                    }
                }
            ]
        },
        {
            key: 'location',
            label: 'Location',
            fields: [
                { name: 'heading', type: 'text', label: 'Heading' },
                { name: 'lines', type: 'list', label: 'Address Lines' }
            ]
        }
    ],
};

export const DEFAULTS: Record<string, Record<string, any>> = {
    home: {
        hero: {
            title: 'FOUR BITS',
            subtitle_lines: ['Engineering Begins With Understanding.', 'Software is not the starting point.', 'Understanding people, processes, and business objectives is.'],
            scroll_sections: [
                { title: 'FOUR BITS', line1: 'Before we write a single line of code, we study how your organization works,', line2: 'where value is created, and where technology can remove friction.', line3: '' },
                { title: 'FOUR BITS', line1: 'Only then do we begin engineering.', line2: 'Because successful software is built around businesses—not around frameworks.', line3: '' }
            ]
        },
        intro: {
            kicker: 'ABOUT',
            heading: 'Engineering Intelligent Businesses.',
            paragraphs: [
                'IV BITS is an engineering company that designs and builds intelligent software systems for organizations that view technology as a long-term investment—not a short-term expense.',
                'We believe software should do more than automate tasks. It should simplify operations, improve decision-making, connect people, and create measurable business value.',
                'Our engineering combines software development, artificial intelligence, enterprise applications, product strategy, and modern user experiences into one disciplined process.'
            ],
            callouts: [
                'Every engagement begins with understanding the business.',
                'Every architecture is designed with longevity in mind.',
                'Every solution is engineered to grow alongside the organization it serves.'
            ],
            closing: [{ line1: "We don't build software for the sake of technology.", line2: 'We engineer technology that serves businesses.' }]
        },
        beliefs: {
            kicker: 'CORE',
            heading: 'What We Believe',
            items: [
                'Technology should adapt to businesses—not force businesses to adapt.',
                'Engineering should create clarity, not complexity.',
                'Artificial Intelligence should enhance human capability, not replace responsibility.',
                'Every system should be designed to evolve.',
                'Architecture matters more than trends.',
                'The best software feels invisible because it fits naturally into the way people work.'
            ]
        },
        principles: {
            kicker: 'PRINCIPLES',
            heading: 'The IV BITS Principles',
            items: [
                { title: 'Design Before Development', details: ['Every successful product begins with thoughtful architecture.', 'Writing code is only one part of engineering.'] },
                { title: 'Business Before Technology', details: ['Technology exists to solve business problems.', 'Understanding operations always comes before selecting frameworks.'] },
                { title: 'Intelligence Before Automation', details: ['Automation saves time.', 'Intelligence improves decisions.', 'Our systems are engineered for both.'] },
                { title: 'Simplicity Through Engineering', details: ['The simplest experiences are often backed by the most sophisticated engineering.'] },
                { title: 'Long-Term Thinking', details: ['We build systems designed to evolve—not become obsolete.'] }
            ]
        },
        philosophy: {
            kicker: 'MINDSET',
            heading: 'Engineering Philosophy',
            items: [
                { title: 'Architecture First', desc: 'Every system starts with careful planning.' },
                { title: 'AI Native', desc: 'Artificial Intelligence is integrated where it creates meaningful value.' },
                { title: 'Built to Scale', desc: 'Designed to support growth without sacrificing reliability.' },
                { title: 'Long-Term Partnership', desc: 'Engineering continues long after deployment.' }
            ]
        },
        capabilities: {
            kicker: 'CAPABILITIES',
            heading: 'ENGINEERING CAPABILITIES',
            intro: [
                'Technology should function as one connected ecosystem—not a collection of disconnected applications.',
                'We engineer digital systems that help organizations operate more efficiently, make better decisions, and grow with confidence.'
            ],
            items: [
                {
                    title: 'Artificial Intelligence',
                    desc: 'Intelligent systems that automate repetitive work, improve decision-making, and enhance customer experiences.',
                    items: ['AI Employees', 'AI Voice Agents', 'Knowledge Systems', 'Internal AI Assistants', 'Document Intelligence', 'Workflow Automation', 'AI Chatbots', 'Business Intelligence Assistants']
                },
                {
                    title: 'Enterprise Applications',
                    desc: 'Software engineered around the way organizations actually operate.',
                    items: ['Enterprise Resource Planning (ERP)', 'Customer Relationship Management (CRM)', 'Human Resource Management (HRMS)', 'Inventory Management', 'Sales Management', 'Operations Platforms', 'Internal Business Portals', 'Custom Business Applications']
                },
                {
                    title: 'Digital Products',
                    desc: 'Modern software products built for performance, scalability, and exceptional user experience.',
                    items: ['Corporate Websites', 'SaaS Platforms', 'Customer Portals', 'E-Commerce Platforms', 'Web Applications', 'Mobile Applications', 'Internal Dashboards', 'Administrative Portals']
                },
                {
                    title: 'Intelligent Automation',
                    desc: 'Software designed to eliminate repetitive work and streamline business processes.',
                    items: ['Business Workflow Automation', 'Approval Systems', 'Process Digitization', 'Report Generation', 'Data Processing', 'Business Integrations']
                },
                {
                    title: 'Research & Innovation',
                    desc: 'Emerging technologies are constantly changing the way businesses operate. We actively research, prototype, and experiment with intelligent systems to ensure every solution benefits from modern engineering practices.',
                    items: ['Large Language Models', 'Autonomous AI Agents', 'Machine Learning', 'Computer Vision', 'Generative AI', 'Human–Computer Interaction']
                }
            ]
        },
        methodology: {
            kicker: 'PROCESS',
            heading: 'ENGINEERING METHODOLOGY',
            intro: 'Every successful software system follows a disciplined engineering process.',
            steps: [
                { num: '01', title: 'Discovery', desc: ['Every engagement begins with understanding.', 'Before discussing technology, we study the organization itself.'], items: ['Business Processes', 'Operational Challenges', 'Current Systems', 'Goals', 'Stakeholders', 'Growth Plans'] },
                { num: '02', title: 'Architecture', desc: ['Technology decisions should never be accidental.', 'We design a scalable foundation before development begins.'], items: ['System Architecture', 'Data Models', 'Application Structure', 'Security Planning', 'User Experience', 'Technology Selection'] },
                { num: '03', title: 'Engineering', desc: ['Our engineers transform architecture into reliable software.'], items: ['Backend Engineering', 'Frontend Engineering', 'Artificial Intelligence', 'Database Engineering', 'Quality Assurance', 'Performance Optimization'] },
                { num: '04', title: 'Evolution', desc: ['Engineering never truly finishes.', 'Technology should continuously improve alongside the business.'], items: ['Continuous Improvements', 'New Features', 'Performance Optimization', 'AI Enhancements', 'Maintenance', 'Long-Term Support'] }
            ]
        },
        outcomes: {
            kicker: 'OUTCOMES',
            heading: 'ENGINEERING OUTCOMES',
            intro: ['Every engagement presents a unique engineering challenge.', 'Rather than forcing organizations to adapt to software, we engineer software around the organization.'],
            items: [
                { title: 'Enterprise Operations Platform', desc: 'A centralized system connecting inventory, operations, employees, reporting, and business intelligence into one intelligent platform.' },
                { title: 'AI Customer Operations', desc: 'AI-powered assistants handling customer conversations, internal workflows, documentation, and support operations.' },
                { title: 'Intelligent Knowledge Platform', desc: 'An internal AI assistant capable of understanding company documentation, policies, manuals, and operational knowledge.' },
                { title: 'Business Analytics Platform', desc: 'Interactive dashboards transforming operational data into actionable insights for leadership teams.' },
                { title: 'Digital Customer Experience', desc: 'High-performance websites and customer portals designed to strengthen brand credibility and improve customer engagement.' }
            ]
        },
        industries: {
            kicker: 'INDUSTRIES',
            heading: 'Organizations We Engineer For',
            intro: 'Every industry operates differently.',
            quote: 'Our engineering adapts to the organization—not the other way around.',
            items: ['Manufacturing', 'Healthcare', 'Education', 'Retail', 'Finance', 'Professional Services', 'Hospitality', 'Logistics', 'Real Estate', 'Construction', 'Startups', 'Growing Enterprises']
        },
        why: {
            kicker: 'WHY IV BITS',
            heading: 'Why Organizations Choose IV BITS',
            items: [
                { title: 'Engineering First', desc: 'Every decision begins with architecture rather than implementation.' },
                { title: 'AI Native', desc: 'Artificial Intelligence is integrated where it creates measurable business value.' },
                { title: 'Built Around Your Business', desc: 'No generic software. Every system is designed specifically for your organization.' },
                { title: 'Long-Term Thinking', desc: 'Technology should remain valuable for years—not months.' },
                { title: 'Direct Collaboration', desc: 'Clients work directly with engineers throughout the project.' },
                { title: 'Modern Engineering', desc: 'We combine software engineering, AI, research, and product thinking into one disciplined process.' }
            ]
        },
        research: {
            kicker: 'RESEARCH',
            heading: 'Engineering Beyond Client Projects',
            paragraphs: ['Innovation doesn\'t stop after deployment.', 'Alongside client work, we continuously research emerging technologies, build internal products, develop reusable engineering frameworks, and explore new ways intelligent software can improve organizations.'],
            quote: 'Research allows us to build solutions that are prepared for tomorrow—not just today.',
            list_label: 'Current areas of exploration include',
            areas: ['Artificial Intelligence', 'Large Language Models', 'Machine Learning', 'Computer Vision', 'Autonomous AI Agents', 'Developer Productivity', 'Human–Computer Interaction', 'Enterprise Automation']
        },
        opensource: {
            kicker: 'OPEN SOURCE',
            heading: 'Building Beyond Business',
            paragraphs: ['Engineering improves when knowledge is shared.', 'IV BITS develops reusable libraries, engineering tools, design systems, and open-source projects that strengthen both our own engineering process and the wider developer community.'],
            quote: 'Open source encourages better software, stronger collaboration, and continuous learning.'
        },
        manifesto: {
            kicker: 'MANIFESTO',
            heading: 'Engineering Is Responsibility.',
            lines: [
                'Technology shapes how organizations communicate, operate, and grow.',
                'That responsibility deserves more than writing code.',
                'It deserves thoughtful engineering.',
                'We believe software should outlive technology trends.',
                'Artificial Intelligence should empower people.',
                'Architecture should simplify future decisions.',
                'Businesses deserve systems that become stronger over time—not more complicated.',
                'Every solution we engineer should create lasting value.',
                'Every line of code should have purpose.',
                'Every decision should support the future of the organization.'
            ],
            closing: [{ line1: "We don't build software for launch day.", line2: 'We engineer systems for the next decade.' }]
        },
        contact_cta: {
            kicker: 'CONTACT',
            heading_lines: ["Let's Engineer", "What's Next."],
            paragraphs: ['Whether you\'re building an AI platform, modernizing internal operations, launching a digital product, or exploring a new business idea, we\'d like to understand your organization before discussing technology.'],
            quote: 'Because the best software begins with understanding.',
            button: [{ label: 'Start the Conversation', href: '/contact' }],
            panel: [{ title: 'Connect Worldwide', email: 'fourbits0100@gmail.com', location: 'Vadodara, Gujarat, India', availability: 'Available Worldwide' }],
            process_steps: ['Initial Consultation', 'Discovery Workshop', 'Project Planning', 'Architecture Discussion']
        }
    },
    about: {
        hero: {
            title_lines: ['Engineering', 'Intelligent', 'Systems.'],
            paragraph: 'We are a specialized engineering firm focused on solving complex business problems through thoughtful architecture, artificial intelligence, and scalable software.'
        },
        why_we_exist: {
            heading: 'Why We Exist',
            statements: ['To bridge the gap between business strategy and software engineering.', 'To build systems that empower people rather than replace them.', 'To prove that complex problems don\'t always require complex solutions.']
        },
        philosophy: {
            heading: 'Our Philosophy',
            items: [
                { title: 'Simplicity', desc: 'The best engineering feels invisible.' },
                { title: 'Durability', desc: 'Software should outlast technology trends.' },
                { title: 'Utility', desc: 'Every feature must serve a clear business purpose.' }
            ]
        },
        the_name: {
            title: 'Four Bits',
            items: [{ title: 'Meaning', desc: 'A "nibble" or half a byte. It represents foundational engineering and doing more with less.' }]
        },
        how_we_think: {
            heading: 'How We Think',
            steps: [
                { id: '1', name: 'Understand', icon: 'Brain' },
                { id: '2', name: 'Architect', icon: 'Box' },
                { id: '3', name: 'Engineer', icon: 'Code' }
            ]
        },
        manifesto: {
            heading: 'Our Manifesto',
            paragraph: 'We build for the next decade, not just the next deadline.'
        },
        looking_forward: {
            heading: 'Looking Forward',
            paragraph: 'As technology evolves, our commitment to foundational engineering principles remains unchanged.',
            cta: [{ label: 'Work With Us', href: '/contact' }],
            focus_cards: ['AI Assistants', 'Enterprise Platforms', 'Data Pipelines']
        }
    },
    solutions: {
        hero: {
            title_lines: ['Our', 'Engineering', 'Capabilities.'],
            subtitle_lines: ['We don\'t just deploy software.', 'We architect entire technological ecosystems for resilient businesses.']
        },
        solutions: {
            items: [
                { id: 'ai', title: 'Artificial Intelligence', subtitle: 'Intelligent systems for the modern enterprise.', desc: 'Custom AI employees and workflow automations.', icon: 'Brain', capabilities: ['LLMs', 'Agentic Workflows', 'Computer Vision'] },
                { id: 'erp', title: 'Enterprise Apps', subtitle: 'Platforms that run your business.', desc: 'Scalable HRMS, CRM, and ERP solutions.', icon: 'Database', capabilities: ['Process Digitization', 'Data Analytics', 'Portals'] }
            ]
        }
    },
    contact: {
        hero: {
            title_lines: ['Let\'s', 'Engineer', 'Together.'],
            paragraph: 'Reach out to discuss your next major technological transition.'
        },
        form: {
            step_questions: ['What kind of system do you need?', 'When do you need it by?'],
            project_types: ['AI Integration', 'Enterprise Application', 'Digital Platform', 'Consulting'],
            timelines: ['Within 1 month', '1-3 months', '3-6 months', 'Flexible'],
            budgets: ['Under $10k', '$10k-$50k', '$50k+'],
            success: [{ title: 'Received.', message: 'We will be in touch shortly to discuss the architecture of your vision.', button_label: 'Return Home' }]
        },
        channels: {
            heading: 'Contact Channels',
            items: [
                { name: 'Email', value: 'fourbits0100@gmail.com', href: 'mailto:fourbits0100@gmail.com', icon: 'Mail' },
                { name: 'Careers', value: 'careers@1111bits.com', href: 'mailto:careers@1111bits.com', icon: 'Users' }
            ]
        },
        location: {
            heading: 'Headquarters',
            lines: ['Vadodara', 'Gujarat, India']
        }
    },
    settings: {
        brand: { name: 'IV BITS', logoUrl: '' },
        navbar: { links: [{ title: 'Home', url: '/' }] },
        footer: { text: '© 2026 IV BITS.' },
        contact: { email: 'fourbits0100@gmail.com' }
    }
};

export const getFallbackContent = (page: string, key: string) => {
    if (page === 'settings') {
        return DEFAULTS.settings[key] || {};
    }
    return DEFAULTS[page]?.[key] || {};
};
