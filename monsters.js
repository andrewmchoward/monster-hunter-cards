const monsterListEl = document.querySelector(".monster__cards");
const loadingDiv = document.querySelector(".loading__screen")

async function main() {
    const monsters = await fetch("https://mhw-db.com/monsters");
    const monsterData= await monsters.json();
    
    loadingDiv.classList += " data__complete"

    monsterListEl.innerHTML = monsterData.map(
        (monster) =>
        `<div class="card--wrapper">
        <div class="card">
        <div class="card__list--items">
        <h3 class="card__name">${monster.name}</h3>
            <p class="card__list--item">Type: ${monster.type}</p>
            <p class="card__list--item">Species: ${monster.species}</p>
            <p class="card__list--item card__list--elemental">Elemental Weakness: ${monster.weaknesses[0].element}</p>
            </div>

            <div class="card__decoration ${monster.weaknesses[0].element === 'water' ? 'element__decoration--blue' : null}
            ${monster.weaknesses[0].element === 'fire' ? 'element__decoration--red' : null}
            ${monster.weaknesses[0].element === 'thunder' ? 'element__decoration--yellow' : null}
            ${monster.weaknesses[0].element === 'dragon' ? 'element__decoration--brown' : null}    
            ${monster.weaknesses[0].element === 'ice' ? 'element__decoration--blue' : null} 
            ${monster.weaknesses[0].element === 'blast' ? 'element__decoration--yellow' : null}    
            ">

            <div class="element__icon--wrapper ${monster.weaknesses[0].element === 'water' ? 'element__decoration--blue' : null}
            ${monster.weaknesses[0].element === 'fire' ? 'element__decoration--red' : null}
            ${monster.weaknesses[0].element === 'thunder' ? 'element__decoration--yellow' : null}
            ${monster.weaknesses[0].element === 'dragon' ? 'element__decoration--brown' : null}
            ${monster.weaknesses[0].element === 'ice' ? 'element__decoration--blue' : null}
            ${monster.weaknesses[0].element === 'blast' ? 'element__decoration--yellow' : null}
             ">

              <i class="${monster.weaknesses[0].element === 'water' ? 'fas fa-tint elemental__blue' : null}
              ${monster.weaknesses[0].element === 'fire' ? 'fas fa-fire elemental__red' : null} 
              ${monster.weaknesses[0].element === 'thunder' ? 'fas fa-bolt elemental__yellow' : null} 
              ${monster.weaknesses[0].element === 'dragon' ? 'fas fa-dragon elemental__brown' : null} 
              ${monster.weaknesses[0].element === 'ice' ? 'fas fa-icicles elemental__blue' : null} 
              ${monster.weaknesses[0].element === 'blast' ? 'fas fa-bomb elemental__yellow' : null} 
              elemental">
              </i>

            </div>
          </div>
            <p class="card__list--item">Description: ${monster.description}</p>
        </div>
    </div>`
    )
    .join("");
}

main()
