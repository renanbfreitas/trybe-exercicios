const fetchCoins = async () => {
    const url = 'https://api.coincap.io/v2/assets';

    const result = await fetch(url)
        .then((response) => response.json())
        .then((data) => data.data)
        .catch((error) => `Algo deu errado :( \n${error}`);

    console.log(result);
    return result;
};

fetchCoins();

const viewCoins = async () => {
    const result = await fetchCoins();

    const resultList = document.getElementById('coins-list');
    result
    .slice(0, 10)
    .forEach((coin) => {
        const newLi = document.createElement('li');
        const usdPrice = Number(coin.priceUsd);

        newLi.innerHTML = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;

        resultList.appendChild(newLi);
    });
};

window.onload = viewCoins;
console.log('test');
