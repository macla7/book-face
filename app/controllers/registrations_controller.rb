# app/controllers/registrations_controller.rb
class RegistrationsController < Devise::RegistrationsController

  def create
    puts 'helllo boi 123'
    puts sign_up_params
    build_resource(sign_up_params)
    begin
      resource.save
    rescue => error
      p error.message
    else
      sign_up(resource_name, resource) if resource.persisted?
    ensure
      render_jsonapi_response(resource)
    end
  end

end