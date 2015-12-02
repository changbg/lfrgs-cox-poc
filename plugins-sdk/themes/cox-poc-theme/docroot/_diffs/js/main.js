AUI().use(
	'liferay-sign-in-modal',
	function(A) {
		var wrapper = A.one('#wrapper');

		if (wrapper) {
			wrapper.delegate(
				'click',
				function(event) {
					var ct = event.currentTarget;
					var dropdown = ct.ancestor('.dropdown');

					event.preventDefault();

					if (dropdown) {
						if (dropdown.hasClass('open')) {
							dropdown.removeClass('open');
						}
						else {
							dropdown.addClass('open');
						}

						ct.on(
							'clickoutside',
							function() {
								dropdown.removeClass('open');
								this.detach();
							}
						);
					}
				},
				'.dropdown-toggle'
			);
		}

		if (!Liferay.ThemeDisplay.isSignedIn()) {
			var signIn = A.one('.btn-sign-in');

			if (signIn && signIn.getData('redirect') !== 'true') {
				signIn.plug(Liferay.SignInModal);
			}
		}
	}
);