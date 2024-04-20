class User::AuthenticationFailureApp < Devise::FailureApp
  def http_auth_body
    {
      message: i18n_message
    }.to_json
  end
end
