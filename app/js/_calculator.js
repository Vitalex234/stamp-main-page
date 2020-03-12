var prices = {
	seal: "500",
	stamp: "400",
	facsimile : "550",
	new : "0",
	copy: "500",
	quick: "450",
	delivery: "300",
	selfdelivery: "0",
	tomorrow: "0",
};

function calculate() {
	let result = "0";
	let data = {
		view: $('input[name="view"]:checked').val(),
		type: $('input[name="type"]:checked').val(),
		date: $('input[name="date"]:checked').val(),
		delivery: $('input[name="delivery"]:checked').val()
	}

	$.each(data, function(index, value) {
		result = result*1 + prices[value]*1;
	})

	let quantity = $('input[name="number"]').val();
	result = result * quantity*1
	$('.result-order__sum-amount').html(result.toLocaleString() + ' ₽')

}

$('.form input').on('change', function() {
	calculate()
});

calculate()