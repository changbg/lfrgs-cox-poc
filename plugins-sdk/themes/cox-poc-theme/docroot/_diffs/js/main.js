AUI().use(
	'liferay-sign-in-modal',
	function(A) {
		if (!Liferay.ThemeDisplay.isSignedIn()) {
			var signIn = A.one('.btn-sign-in');

			if (signIn && signIn.getData('redirect') !== 'true') {
				signIn.plug(Liferay.SignInModal);
			}
		}
	}
);