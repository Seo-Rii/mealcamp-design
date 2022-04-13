export const viewportConfig = (useViewport: boolean) => {
    return useViewport ? {
        viewport: {
            viewports: {
                m_a13: {
                    name: 'iPhone 13 Pro',
                    styles: {
                        width: '375px',
                        height: '812px',
                    },
                },
            },
            defaultViewport: 'm_a13',
        },
        options: {showPanel: false},
    } : {
        options: {showPanel: true},
    }
}