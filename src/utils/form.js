export const get_change_password_errors = (errors) => {
    return errors.response.data.validation_error.body_params.map((body) => {
		return {
			msg: body.msg,
		};
	});
};
