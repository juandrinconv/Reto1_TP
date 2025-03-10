// function UseDataDate(data) {
//   let fecha_completa = new Date();
//   let dia = String(fecha_completa.getDate()).padStart(2, "0");
//   let mes = String(fecha_completa.getMonth() + 1).padStart(2, "0");
//   let año = fecha_completa.getFullYear();
//   let horas = fecha_completa.getHours();
//   let minutos = String(fecha_completa.getMinutes()).padStart(2, "0");
//   let COP = data.result.COP;
//   let fecha_modificada = `1€ = ${COP} COP | ${dia}.${mes}.${año} en ${horas}:${minutos}`;
//   document.getElementById("fecha_modificada").textContent = fecha_modificada;
// }

// fetch("https://api.fastforex.io/fetch-one?from=EUR&to=COP&api_key=1ea9ea7aa0-c8bc299682-ssoa8p")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     UseDataDate(data);
//   })
//   .catch((error) => {
//     console.error("Ocurrió un error en la petición:", error);
//   });

// UseFetch();
