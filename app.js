$(document).ready(function() {
	$('#formOne').submit(function() {
		const name = $('#name').val();
		const description = $('#description').val();
		const dateRange = $('#dateRange').val();
		const phoneNumber = $('#phoneNumber').val();
		$('#test').text(`Thanks for scheduling an appointment ${name} `);
		$('#test').append(`for ${description} `);
		$('#test').append(`between dates ${dateRange}.`);
		$('#test').append(`<br><br> If we have any questions we will contact you at ${phoneNumber}.`);
		event.preventDefault();
	});
});
