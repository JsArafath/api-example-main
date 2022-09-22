/* 
    This is the synchronized way of fetching
*/

const loadUser = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => displayData(data.results))
        .catch(error => console.log(error))
};

/* 
    This the asynchronized way of fetching data
*/

const loadUserAsync = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json();
        displayData(data.results);
    }
    catch(error){
        console.log(error);
    }
}


const displayData = (users) => {
    console.log(users);
}