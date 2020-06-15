const instruments = [
    {
        name: 'kick',
        title: 'KI'
    },
    {
        name: 'snare',
        title: 'SN'
    },
    {
        name: 'closedhat',
        title: 'CH'
    },
    {
        name: 'openhat',
        title: 'OH'
    },
    {
        name: 'crash',
        title: 'CR'
    },
    {
        name: 'china',
        title: 'CH'
    }
]

const barsAmount = 8
const barSize = 4
const tabsAmount = 4

const structure = instruments.map(({ name, title }) => ({
    name,
    title,
    pads: Array(barsAmount * barSize * tabsAmount).fill(0)
}))

export default structure
export { barsAmount, barSize, tabsAmount }