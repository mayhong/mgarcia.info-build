window.sendEmail = ()=>{
  let $contactForm = $('#contact-form');
	$.ajax({
		url: 'https://formspree.io/mario@mgarcia.info',
		method: 'POST',
		data: $contactForm.serialize(),
		dataType: 'json',
		beforeSend: ()=>{
			$contactForm.append('<div class="alert alert--loading">Sending message…</div>');
		},
		success: data=>{
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--success">Message sent!</div>');
		},
		error: err=>{
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
		}
	});
};
