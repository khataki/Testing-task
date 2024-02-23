function loadDeals() {
    const endpoint = 'https://api.amocrm.com/api/v4/leads';
    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjAwMTlkNDIwZTUwMGFhOTBjOGIzMzVmYmFhNDVhY2E2NDlkNmZhOWJkMmMzNDNiZDBiMWQ0Y2YyMjRiZWY2YTVkMzg5N2MxZjk2NGU3ZGE2In0.eyJhdWQiOiJiOTk1ODcyNS0zZmE0LTRiNTgtOWZjMC01NTA3ZGQ4MGFiY2YiLCJqdGkiOiIwMDE5ZDQyMGU1MDBhYTkwYzhiMzM1ZmJhYTQ1YWNhNjQ5ZDZmYTliZDJjMzQzYmQwYjFkNGNmMjI0YmVmNmE1ZDM4OTdjMWY5NjRlN2RhNiIsImlhdCI6MTcwODY3NDY2NywibmJmIjoxNzA4Njc0NjY3LCJleHAiOjE3MTQxNzYwMDAsInN1YiI6IjEwNzEzNDE0IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxNTg4MTYyLCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiOGY2NTE0NzAtMzk2OC00YzVlLWI3Y2QtODA3ODhlNDRiNTljIn0.j_Q-Lcy-sI67WVzZbIpJNrIh8iDDOxLoumPtJSExs3aenjzY51QziTGeHffDYS9HZqb-P93pvCO-ndUTB4WzTvg54QQvy9AvH9K_P4HL7fHJqK3XDK6F8HhorsawsCAX7q4oDq6Bdhg8O8gomDb-u2p4xxaQ2lqx-UFY6XCvrUVp7FlEqY4vKVlo308lQz1DIGaVUeD8HJmfto1hftRZykr2rgkEDYtjVJEJEuSIKAQZue8r8AzgNAMYjt7LUFDKbs_PPjBP17U-P4E2j5kNPehb4NStVA06Jd30KhM-VNGn9jZG7Q7KEFxsB9bQ810DPZOwtAidMwNacSSvdfJ1wA'; // Замените на свой access токен
    const headers = {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
    };

    fetch(endpoint, {
        method: 'GET',
        headers: headers
    })
        .then(response => response.json())
        .then(data => {
            displayDeals(data._embedded.leads);
        })
        .catch(error => {
            console.error('Произошла ошибка при выполнении запроса:', error);
        });

}

function displayDeals(deals) {
    const dealsList = document.getElementById('deals-list');
    dealsList.innerHTML = '';

    deals.forEach(deal => {
        const row = `<tr>
                        <td>${deal.name}</td>
                        <td>${deal.price}</td>
                        <td>${deal.created_at}</td>
                        <td>${deal.updated_at}</td>
                        <td>${deal.responsible_user}</td>
                    </tr>`;
        dealsList.innerHTML += row;
    });
}

fetch('https://api.amocrm.com/api/v4/leads')
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        // обработка данных
    })
    .catch(error => {
        console.error('Ошибка при выполнении запроса:', error);
    });
