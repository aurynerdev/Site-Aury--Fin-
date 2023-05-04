let imagemmm = [
  [
    "./src/Tokito.jpg",
    "./src/Tokito2.jpg",
    "./src/Tokito3.jpg",
    1
  ],
  [
    "./src/Sae.jpg",
    "./src/Sae2.jpg",
    "./src/Sae3.jpg",
    1
  ],
  [
    "./src/Megumii.jpg",
    "./src/Megumi2.jpg",
    "./src/Megumi3.jpg",
    1
  ]
]

function trocarImagem(htmlElement) {
  const imagemArray = imagemmm[htmlElement.dataset.id]
  const imagemIndex = imagemArray[imagemArray.length - 1]

  imagemArray[imagemArray.length - 1] = (imagemIndex + 1) % (imagemArray.length - 1)

  htmlElement.src = imagemArray[imagemIndex]
}
