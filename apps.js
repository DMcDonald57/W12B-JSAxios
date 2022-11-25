
function goodActivity(response) {
    let data = response.activity;
    document.getElementById(`Action`).insertAdjacentHTML(`afterend`,`<p>${data}</p>`);
    console.log(data);
}

function badActivity(error) {
    document.body.insertAdjacentHTML(`afterend` `<h3>Please Try again.</h3>`)
    console.log(`failure`);
}

function getActivity() {
    axios.request({
    url : `http://www.boredapi.com/api/activity/`
}).then(goodActivity).catch(badActivity);
}

document.getElementById(`Action`).addEventListener(`click`,getActivity);