exports.autoLogin = (token) => `{
      user(token: "${token}") {
	profile {
	  token
	  username
	}
      }
    }`;

exports.login = (email, password) => `{
      user(email: "${email}", password: "${password}") {
	profile {
	  token
	  username
	}
      }
    }`;

