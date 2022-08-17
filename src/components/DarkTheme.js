// origin
export function darkTheme(theme) {
  colorInxDark.map(color => {
    document.documentElement.style.setProperty(
      color.colorName,
      color.colorIndex
    )
  })
  return "dark"
}

export function lightTheme(theme) {
  colorInxLight.map(color => {
    document.documentElement.style.setProperty(
      color.colorName,
      color.colorIndex
    )
  })
  return "light"
}

const colorInxDark = [
  {
    colorName: "--clr-primary-11",
    colorIndex: "hsl(0, 0%, 20%)",
  },
  {
    colorName: "--clr-primary-12",
    colorIndex: "hsl(0, 0%, 15%)",
  },
  {
    colorName: "--clr-primary-13",
    colorIndex: "hsl(0, 0%, 12%)",
  },
  {
    colorName: "--clr-primary-14",
    colorIndex: "hsl(0, 0%, 5%)",
  },
  {
    colorName: "--clr-ff-1",
    colorIndex: "hsl(300, 2%, 90%)",
  },
  {
    colorName: "--clr-ff-2",
    colorIndex: "hsl(220, 2%, 66%)",
  },
  {
    colorName: "--clr-ff-3",
    colorIndex: "hsl(240, 1%, 74%)",
  },
  {
    colorName: "--clr-ff-4",
    colorIndex: "hsl(240, 0%, 52%)",
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
    colorName: "--clr-grey-2",
    colorIndex: "#282A2A",
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
    colorIndex: "#1E201F",
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
    colorIndex: "rgb(40, 42, 42)",
  },
]

const colorInxLight = [
  {
    colorName: "--clr-primary-11",
    colorIndex: "hsl(240, 29%, 95%)",
  },
  {
    colorName: "--clr-primary-12",
    colorIndex: "hsl(210, 2%, 89%)",
  },
  {
    colorName: "--clr-primary-13",
    colorIndex: "hsl(240, 3%, 93%)",
  },
  {
    colorName: "--clr-primary-14",
    colorIndex: "hsl(240, 1%, 83%)",
  },
  {
    colorName: "--clr-ff-1",
    colorIndex: "hsl(240, 1%, 22%)",
  },
  {
    colorName: "--clr-ff-2",
    colorIndex: "hsl(210, 1%, 33%)",
  },
  {
    colorName: "--clr-ff-3",
    colorIndex: "hsl(240, 1%, 30%)",
  },
  {
    colorName: "--clr-ff-4",
    colorIndex: "hsl(240, 0%, 50%)",
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
    colorIndex: "hsl(209, 61%, 16%)",
  },
  {
    colorName: "--clr-grey-2",
    colorIndex: "hsl(0, 0%, 100%)",
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
    colorName: "--clr-red-light",
    colorIndex: "hsl(360, 71%, 66%)",
  },
  {
    colorName: "--clr-white",
    colorIndex: "#fff",
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
