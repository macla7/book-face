module Respondable
    def render_jsonapi_response(resource)
    # if resource.errors.empty?
    #   puts 'prowl with no erroe'
    #   render jsonapi: resource
    # else
    #   puts 'prowel with errors'
    #   render jsonapi_errors: resource.errors, status: 400
    # end

    begin
      resource.save
    rescue => error
      p error.message
      render jsonapi_errors: resource.errors, status: 400
    else
      puts 'where\'s this at boi'
      render jsonapi: resource
    end
  end
end