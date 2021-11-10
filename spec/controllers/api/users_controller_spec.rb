# spec/controllers/api/users_controller_spec.rb
require 'rails_helper'

describe UsersController, type: :request do

  let (:user) { create_user }

  context 'When fetching a user' do
    before do
      login_with_api(user)
      get "/api/users/#{user.id}", headers: {
        'Authorization': response.headers['Authorization']
      }
    end

    it 'returns 200' do
      expect(response.status).to eq(200)
    end

    it 'returns the user' do
      puts 'bonk'
      p json
      p user
      expect(json['data']).to have_id(user.id.to_s)
      expect(json['data']).to have_type('users')
    end
  end

  context 'When a user is missing' do
    before do
      login_with_api(user)
      get "/api/users/blank", headers: {
        'Authorization': response.headers['Authorization']
      }
    end

    it 'returns 404' do
      expect(response.status).to eq(404)
    end
  end

  context 'When the Authorization header is missing' do
    before do
      get "/api/users/#{user.id}"
    end

    # Changing this form 401 (from the online guide) to 302 as it 
    # is redirecting to login page, which seems to make sense..?
    it 'returns 302' do
      expect(response.status).to eq(302)
    end

    # My own spec, confirming where it's redirecting.
    it 'location is /login' do
      expect(response.location).to eq('http://www.example.com/api/login')
    end
  end

end