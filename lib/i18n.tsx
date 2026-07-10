'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Lang = 'en' | 'lo';

const translations = {
    en: {
        nav: { about: 'About', projects: 'Projects', skills: 'Skills', contact: 'Contact', resume: 'Resume' },
        hero: {
            eyebrow: 'Junior Software Developer',
            paragraph:
                "I build mobile and web applications with React, Flutter, and modern frontend tooling, and I'm comfortable working with SQL-backed systems and data analysis. Fresh out of a business-to-software transition, looking for a team to learn from.",
            ctaWork: 'View my work',
            ctaContact: 'Get in touch',
            facts: [
                { label: 'Focus', value: 'Web & mobile apps' },
                { label: 'Stack', value: 'React, Flutter, TypeScript' },
                { label: 'Status', value: 'Open to junior roles' },
            ],
        },
        about: {
            eyebrow: 'About',
            lead: 'A fresh graduate moving from business into software development, learning by shipping real, working projects.',
            focusAreas: [
                { title: 'Mobile & web', description: 'Cross-platform apps with Flutter and React / React Native.' },
                { title: 'Data & databases', description: 'SQL database design, data mining, and analysis.' },
                { title: 'Frontend', description: 'Responsive interfaces with React, Next.js, and TypeScript.' },
            ],
        },
        projects: {
            eyebrow: 'Projects',
            heading: 'Featured work',
            subheading: 'A couple of recent projects showing how I approach building and shipping software.',
            keyFeatures: 'Key features',
            liveDemo: 'Live demo',
            viewCode: 'View code',
            items: [
                {
                    title: 'AI-Powered Smart POS System',
                    description:
                        'A POS system for hardware stores. Handles sales, inventory, and customer orders. Integrated AI to recommend products based on items in the cart, and helps analyze sales and recommend actions on the dashboard.',
                    features: [
                        'Manage inventory and stock levels',
                        'Sales dashboard with analytics',
                        'Multiple payment methods (cash/card)',
                        'AI product recommendations',
                    ],
                },
                {
                    title: 'Typing Practice',
                    description:
                        "A Monkeytype-inspired typing trainer with adaptive difficulty, it tracks which words and characters trip you up and weights practice rounds toward your weak spots. Pure HTML/CSS/JS, no framework or build step.",
                    features: [
                        'Five modes: words, timed, and character/hand drills',
                        'Adaptive weighting repeats your weak words and keys',
                        'Live WPM, accuracy, and consistency stats',
                        'On-screen keyboard with finger-position highlighting',
                    ],
                },
            ],
        },
        skills: {
            eyebrow: 'Skills',
            heading: 'Technologies I work with',
            categories: [
                { title: 'Frontend development' },
                { title: 'Backend & infra' },
                { title: 'Data & analysis' },
                { title: 'Tools & workflow' },
            ],
        },
        contact: {
            eyebrow: 'Contact',
            heading: "Let's talk",
            lead: 'Open to junior developer roles and internships. The fastest way to reach me is email.',
            channels: [{ label: 'Email' }, { label: 'LinkedIn' }, { label: 'GitHub' }, { label: 'Resume' }],
        },
        footer: {
            builtWith: 'Built with Next.js & Tailwind CSS',
        },
    },
    lo: {
        nav: { about: 'ກ່ຽວກັບ', projects: 'ໂຄງການ', skills: 'ທັກສະ', contact: 'ຕິດຕໍ່', resume: 'ຊີວະປະຫວັດ' },
        hero: {
            eyebrow: 'ນັກພັດທະນາຊອບແວລະດັບຈູນິເນຍ',
            paragraph:
                'ຂ້ອຍພັດທະນາແອັບມືຖືແລະເວັບໄຊທ໌ດ້ວຍ React, Flutter, ແລະເຄື່ອງມືພັດທະນາ frontend ທີ່ທັນສະໄໝ, ພ້ອມທັງມີຄວາມຖະນັດໃນລະບົບຖານຂໍ້ມູນ SQL ແລະການວິເຄາະຂໍ້ມູນ. ຫາກໍ່ປ່ຽນສາຍຈາກທຸລະກິດມາສູ່ການພັດທະນາຊອບແວ, ກຳລັງຊອກຫາທີມທີ່ຈະໄດ້ຮຽນຮູ້ນຳ.',
            ctaWork: 'ເບິ່ງຜົນງານຂອງຂ້ອຍ',
            ctaContact: 'ຕິດຕໍ່ຂ້ອຍ',
            facts: [
                { label: 'ຈຸດສຸມ', value: 'ແອັບເວັບ ແລະ ມືຖື' },
                { label: 'ເທັກໂນໂລຢີ', value: 'React, Flutter, TypeScript' },
                { label: 'ສະຖານະ', value: 'ເປີດຮັບຕຳແໜ່ງລະດັບຈູນິເນຍ' },
            ],
        },
        about: {
            eyebrow: 'ກ່ຽວກັບ',
            lead: 'ນັກສຶກສາຈົບໃໝ່ທີ່ກຳລັງປ່ຽນສາຍຈາກທຸລະກິດມາສູ່ການພັດທະນາຊອບແວ, ຮຽນຮູ້ໂດຍການສ້າງໂຄງການທີ່ໃຊ້ງານໄດ້ຈິງ.',
            focusAreas: [
                { title: 'ມືຖື ແລະ ເວັບ', description: 'ແອັບຂ້າມແພລດຟອມດ້ວຍ Flutter ແລະ React / React Native.' },
                { title: 'ຂໍ້ມູນ ແລະ ຖານຂໍ້ມູນ', description: 'ການອອກແບບຖານຂໍ້ມູນ SQL, ການຂຸດຄົ້ນຂໍ້ມູນ, ແລະການວິເຄາະ.' },
                { title: 'Frontend', description: 'ອິນເຕີເຟດທີ່ຕອບສະໜອງດ້ວຍ React, Next.js, ແລະ TypeScript.' },
            ],
        },
        projects: {
            eyebrow: 'ໂຄງການ',
            heading: 'ຜົນງານເດັ່ນ',
            subheading: 'ໂຄງການບໍ່ດົນມານີ້ສອງສາມອັນທີ່ສະແດງໃຫ້ເຫັນວິທີການສ້າງແລະສົ່ງມອບຊອບແວຂອງຂ້ອຍ.',
            keyFeatures: 'ຄຸນສົມບັດຫຼັກ',
            liveDemo: 'ເດໂມສົດ',
            viewCode: 'ເບິ່ງໂຄ້ດ',
            items: [
                {
                    title: 'ລະບົບ POS ອັດສະລິຍະດ້ວຍ AI',
                    description:
                        'ລະບົບ POS ສຳລັບຮ້ານຂາຍອຸປະກອນຮາດແວ. ຈັດການການຂາຍ, ສິນຄ້າຄົງຄັງ, ແລະຄຳສັ່ງຊື້ຂອງລູກຄ້າ. ນຳໃຊ້ AI ເພື່ອແນະນຳສິນຄ້າໂດຍອີງໃສ່ລາຍການໃນກະຕ່າ, ພ້ອມທັງຊ່ວຍວິເຄາະຍອດຂາຍແລະແນະນຳການດຳເນີນການຢູ່ໜ້າແດັຊບອດ.',
                    features: [
                        'ຈັດການສິນຄ້າຄົງຄັງແລະລະດັບສະຕັອກ',
                        'ແດັຊບອດຍອດຂາຍພ້ອມການວິເຄາະ',
                        'ຫຼາຍຊ່ອງທາງການຊຳລະເງິນ (ເງິນສົດ/ບັດ)',
                        'ການແນະນຳສິນຄ້າດ້ວຍ AI',
                    ],
                },
                {
                    title: 'ຝຶກພິມ',
                    description:
                        'ໂປຣແກຣມຝຶກພິມທີ່ໄດ້ແຮງບັນດານໃຈຈາກ Monkeytype ພ້ອມລະດັບຄວາມຍາກແບບປັບຕົວໄດ້, ມັນຕິດຕາມຄຳແລະຕົວອັກສອນທີ່ເຮັດໃຫ້ທ່ານພິມຜິດ ແລະປັບນ້ຳໜັກຮອບການຝຶກໄປສູ່ຈຸດອ່ອນຂອງທ່ານ. ໃຊ້ພຽງແຕ່ HTML/CSS/JS ລ້ວນໆ, ບໍ່ມີເຟຣມເວີກຫຼືຂັ້ນຕອນການ build.',
                    features: [
                        '5 ໂໝດ: ຄຳສັບ, ຈັບເວລາ, ແລະຝຶກຕົວອັກສອນ/ນິ້ວມື',
                        'ການປັບນ້ຳໜັກອັດຕະໂນມັດເພື່ອຝຶກຊ້ຳຄຳ ແລະປຸ່ມທີ່ທ່ານອ່ອນ',
                        'ສະຖິຕິ WPM, ຄວາມແມ່ນຍຳ, ແລະຄວາມສະໝ່ຳສະເໝີແບບສົດ',
                        'ແປ້ນພິມເທິງໜ້າຈໍພ້ອມການເນັ້ນຕຳແໜ່ງນິ້ວມື',
                    ],
                },
            ],
        },
        skills: {
            eyebrow: 'ທັກສະ',
            heading: 'ເທັກໂນໂລຢີທີ່ຂ້ອຍໃຊ້ເຮັດວຽກ',
            categories: [
                { title: 'ການພັດທະນາ Frontend' },
                { title: 'Backend ແລະ ໂຄງລ່າງພື້ນຖານ' },
                { title: 'ຂໍ້ມູນ ແລະ ການວິເຄາະ' },
                { title: 'ເຄື່ອງມື ແລະ ຂັ້ນຕອນການເຮັດວຽກ' },
            ],
        },
        contact: {
            eyebrow: 'ຕິດຕໍ່',
            heading: 'ມາລົມກັນ',
            lead: 'ເປີດຮັບຕຳແໜ່ງນັກພັດທະນາລະດັບຈູນິເນຍ ແລະການຝຶກງານ. ວິທີທີ່ໄວທີ່ສຸດໃນການຕິດຕໍ່ຂ້ອຍແມ່ນອີເມວ.',
            channels: [{ label: 'ອີເມວ' }, { label: 'LinkedIn' }, { label: 'GitHub' }, { label: 'ຊີວະປະຫວັດ' }],
        },
        footer: {
            builtWith: 'ສ້າງດ້ວຍ Next.js ແລະ Tailwind CSS',
        },
    },
};

type Translations = typeof translations.en;

const LanguageContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Translations } | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Lang>('en');

    useEffect(() => {
        const stored = localStorage.getItem('lang');
        if (stored === 'en' || stored === 'lo') setLangState(stored);
    }, []);

    const setLang = (l: Lang) => {
        setLangState(l);
        localStorage.setItem('lang', l);
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
    return ctx;
}
