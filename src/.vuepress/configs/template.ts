import { i18n } from './utils';

const navigationLinks = {
    start: [
        '/guide/install_guide',
        '/guide/da_rule',
        '/guide/var',
        '/guide/usefull_mvel',
        '/guide/online_repo',
        '/guide/translate',
    ],
    about: [
        '/about/contacts',
        '/about/subscribe',
    ]
};

export const configs = {
    dev: {
        dest: 'dist',
        port: 9000
    },
    website: {
        base: '/ShortX-Pages/',
        icon: '/ShortX-Pages/images/logo.png',
        logo: '/images/logo.png',
        title: 'Short𝕏',
        locales: {
            '/en/': {
                lang: 'en-US',
                description: 'System-level automated task tool'
            },
            '/zh-cn/': {
                lang: 'zh-CN',
                description: '系统级自动化指令工具'
            }
        }
    },
    github: {
        repo: 'https://github.com/shortx-repo/ShortX',
        branch: 'main'
    }
};

export const navBarItems = {
    '/en/': [{
        text: 'Navigation',
        children: [{
            text: 'Get Started',
            children: [
                { text: 'Introduce', link: i18n.string(navigationLinks.start[0], 'en') },
                { text: 'Direct and Rule', link: i18n.string(navigationLinks.start[1], 'en') },
                { text: 'Vars', link: i18n.string(navigationLinks.start[2], 'en') },
                { text: 'MVELs', link: i18n.string(navigationLinks.start[3], 'en') },
                { text: 'Online rules', link: i18n.string(navigationLinks.start[4], 'en') },
                { text: 'Translate', link: i18n.string(navigationLinks.start[5], 'en') },
            ]
        }, {
            text: 'About',
            children: [
                { text: 'Subscribe', link: i18n.string(navigationLinks.about[1], 'en') },
                { text: 'Contact us', link: i18n.string(navigationLinks.about[0], 'en') }
            ]
        }]
    }, {
        text: 'Contact Us',
        link: i18n.string(navigationLinks.about[0], 'en')
    }],
    '/zh-cn/': [{
        text: '导航',
        children: [{
            text: '入门',
            children: [
                { text: '安装与激活', link: i18n.string(navigationLinks.start[0], 'en') },
                { text: '一键指令和自动指令', link: i18n.string(navigationLinks.start[1], 'en') },
                { text: '变量', link: i18n.string(navigationLinks.start[2], 'en') },
                { text: 'MVEL表达式', link: i18n.string(navigationLinks.start[3], 'en') },
                { text: '贡献线上指令', link: i18n.string(navigationLinks.start[4], 'en') },
                { text: '贡献翻译', link: i18n.string(navigationLinks.start[5], 'en') },
            ]
        }, {
            text: '关于',
            children: [
                { text: '高级版订阅', link: i18n.string(navigationLinks.about[1], 'zh-cn') },
                { text: '联系我们', link: i18n.string(navigationLinks.about[0], 'zh-cn') },
            ]
        }]
    }, {
        text: '联系我们',
        link: i18n.string(navigationLinks.about[0], 'zh-cn')
    }]
};

export const sideBarItems = {
    '/en/': [{
        text: 'Get Started',
        collapsible: true,
        children: i18n.array(navigationLinks.start, 'en')
    }, {
        text: 'About',
        collapsible: true,
        children: i18n.array(navigationLinks.about, 'en')
    }],
    '/zh-cn/': [{
        text: '入门',
        collapsible: true,
        children: i18n.array(navigationLinks.start, 'zh-cn')
    }, {
        text: '关于',
        collapsible: true,
        children: i18n.array(navigationLinks.about, 'zh-cn')
    }]
};