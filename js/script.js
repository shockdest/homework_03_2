 var url = 'https://api.mockaroo.com/api/0c169030?count=6&key=ec042d30';

 async function fetchData() {
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            const html = data
                .map(user => {
                    console.log(user)
                    return `
                    <tr>
                      <td><img border="0" align="left" src="${user.img}"\>${user.name}</td>
                      <td>${user.location1}, ${user.location2}</td>
                      <td>${user.email}</td>
                      <td>${user.phonenumber}</td>
                    </tr>
                    `;
                })
                .join("");
                document.querySelector('#users').insertAdjacentHTML('beforeend', html);
            })
            .catch(error => {
                console.log(error)
            })
        }

fetchData();