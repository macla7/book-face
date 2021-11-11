class SessionsController < Devise::SessionsController

  def create
    self.resource = warden.authenticate!(auth_options)
    set_flash_message!(:notice, :signed_in)
    sign_in(resource_name, resource)
    yield resource if block_given?
    puts 'HACKING VOICE: I\'M IN'
    respond_with resource, location: after_sign_in_path_for(resource)
    p request.headers
    p response.headers
  end

  private

  def respond_with(resource, _opts = {})
    render_jsonapi_response(resource)
  end

  def respond_to_on_destroy
    head :no_content
  end

end