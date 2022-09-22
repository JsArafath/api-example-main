const loadMeal = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayData(data))
}

const displayData = (data) => {
    console.log(data.meals);
    const mealsContainer = document.getElementById('meal-conatiner');
    mealsContainer.textContent = ``; //Better to use textContent
    data.meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        `;

        mealsContainer.appendChild(div);
    });

}

const searchMeal = (event) =>{
    loadMeal(event.target.value);
}

loadMeal('a');