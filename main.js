document.querySelector('#bank').addEventListener('submit', checkBank);

function checkBank(e) {
    e.preventDefault();
    var ifsc = document.querySelector('#ifsc').value;
    axios.get('https://ifsc.razorpay.com/' + ifsc)
        .then(function (response) {
            var address = response.data.ADDRESS;
            var bank = response.data.BANK;
            var branch = response.data.BRANCH;
            var state = response.data.STATE;
            var output = `
                <div class="col-sm-11 col-md-9 mt-3 mx-auto">
                    <ul>
                        <li><i class="fas fa-map-marker-alt"></i> <strong>Address</strong>: ${address}</li>
                        <li><i class="fas fa-university"></i> <strong>Bank</strong>: ${bank}</li>
                        <li><i class="fas fa-home"></i> <strong>Branch</strong>: ${branch}</li>
                        <li><i class="far fa-compass"></i> <strong>State</strong>: ${state}</li>
                    </ul>
                </div>
            `;
            console.log(response.data);
            document.querySelector('#output').innerHTML = output;
        })
        .catch(function (error) {
            console.log(error);
        });


}

// Bootstrap popovers
$('[data-toggle="popover"]').popover();