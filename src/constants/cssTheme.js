export const colorInx = [
  {
    colorName: "--clr-primary-1",
    colorIndex: "hsl(184, 91%, 17%)",
  },
  {
    colorName: "--clr-primary-2",
    colorIndex: "hsl(185, 84%, 25%)",
  },
  {
    colorName: "--clr-primary-5",
    colorIndex: "#2caeba",
  },
  {
    colorName: "--clr-primary-8",
    colorIndex: "hsl(184, 80%, 74%)",
  },
  {
    colorName: "--clr-primary-9",
    colorIndex: "hsl(185, 94%, 87%)",
  },
  {
    colorName: "--clr-primary-10",
    colorIndex: "hsl(186, 100%, 94%)",
  },
  {
    colorName: "--clr-grey-1",
    colorIndex: "#DDE8F3",
  },
  {
    colorName: "--clr-grey-3",
    colorIndex: "hsl(209, 34%, 30%)",
  },
  {
    colorName: "--clr-grey-4",
    colorIndex: "hsl(209, 28%, 39%)",
  },
  {
    colorName: "--clr-grey-5",
    colorIndex: "hsl(210, 22%, 49%)",
  },
  {
    colorName: "--clr-grey-9",
    colorIndex: "hsl(212, 33%, 89%)",
  },
  {
    colorName: "--clr-grey-10",
    colorIndex: "hsl(210, 36%, 96%)",
  },
  {
    colorName: "--clr-red-dark",
    colorIndex: "hsl(360, 67%, 44%)",
  },
  {
    colorName: "--clr-white",
    colorIndex: "#212121",
  },
  {
    colorName: "--light-shadow",
    colorIndex: "0 5px 15px rgba(0, 0, 0, 0.1)",
  },
  {
    colorName: "--dark-shadow",
    colorIndex: "0 5px 15px rgba(0, 0, 0, 0.2)",
  },
  {
    colorName: "--clr-dack-1",
    colorIndex: "rgb(34, 34, 34)",
  },
]
const color = colorInx.map(color => {
  console.log(color.colorName)
  console.log(color.colorIndex)
  return color.colorName, color.colorIndex
})
