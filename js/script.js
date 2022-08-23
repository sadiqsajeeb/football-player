const arofObj = [
  {
    img: "https://secure.static.goal.com/167500/167528hp2.jpg",
    name: "Cristiano Ronaldo",
    textOne: 940,
    textTwo: 780,
  },

  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWP-ALrOiwXV0L7JVvAFhI5PMQzmn7srn3aA&usqp=CAU",
    name: "Lionel Messi",
    textOne: 890,
    textTwo: 450,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpYnyTGkvdzVb_sFgtJe-NpT3w84ui_eQSGQ&usqp=CAU",
    name: "Kylian Mbappe",
    textOne: 560,
    textTwo: 455,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9PccCnLacbDXC0tviZXLW1PCm5wswHBnfSw&usqp=CAU",
    name: "Harry Kane",
    textOne: 631,
    textTwo: 530,
  },
  {
    img: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt8e1f444328de56ec/627ff3ee9154c30583900892/20220514_Robert_Lewandowski.jpg?auto=webp&fit=crop&format=jpg&height=800&quality=60&width=1200",
    name: "Robert Lewandowski",
    textOne: 405,
    textTwo: 260,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZaR92ZwBULbalbAKuIGuaA7lm12In2sZlFQ&usqp=CAU",
    name: "Riyad Mahrez",
    textOne: 605,
    textTwo: 590,
  },
  {
    img: "https://i.ytimg.com/vi/grTF8_YZXJY/maxresdefault.jpg",
    name: "Kevin De Bruyne",
    textOne: 500,
    textTwo: 356,
  },
  {
    img: "https://cdn-wp.thesportsrush.com/2020/05/Untitled-design-2020-05-11T225815.385.jpg",
    name: "Virgil van Dijk",
    textOne: 350,
    textTwo: 280,
  },


];

function createElementCard(elementObject) {
  const elem = document.getElementById("leftElement");
  const div = document.createElement("div");
  div.setAttribute("class", "col-lg-4 col-md-6");

  div.innerHTML = `

        <div class="card bg-primary shadow-lg">
            <img
            src=${elementObject.img}
            />
            <div
            class="card-body bg-dark text-light text-center rounded-bottom"
            >
            <h5 class="card-title">${elementObject.name}</h5>
            <p class="card-text">
                <span>${elementObject.textOne} Goals</span> . <span>${elementObject.textTwo} assist</span>
            </p>
            <a class="btnClicked btn btn-primary btn-lg w-100 rounded-0"
                >Select</a
            >
            </div>
        </div>

`;
  elem.appendChild(div);
}

for (item of arofObj) {
  createElementCard(item);
}

//common function

