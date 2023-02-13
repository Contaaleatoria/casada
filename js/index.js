const xdImage = document.querySelector("xd-image")
const botaoXd = document.querySelector("botao-xd")
const fecharXdImage = document.querySelector("fechar-xd-image")

botaoXd.addEventListener("click", () => {
  xdImage.classList.toggle("aberto")
}
)
fecharXdImage.addEventListener("click", () => {
 xdImage.classList.toggle("aberto")
}

)
