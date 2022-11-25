
// Successful response function

function goodActivity(response) {
    let data = response.data.activity;
    document.getElementById(`Action`).insertAdjacentHTML(`afterend`,`<p>${data}</p>`);
}

// failure response function

function badActivity(error) {
    document.body.insertAdjacentHTML(`afterend` `<h3>Please Try again.</h3>`)
}

// the Axios request
function getActivity() {
    axios.request({
    url : `http://www.boredapi.com/api/activity/`
}).then(goodActivity).catch(badActivity);
}

// event listener for the buttons
document.getElementById(`Action`).addEventListener(`click`,getActivity);
