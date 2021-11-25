require "rails_helper"

RSpec.describe GroupInvitesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/group_invites").to route_to("group_invites#index")
    end

    it "routes to #show" do
      expect(get: "/group_invites/1").to route_to("group_invites#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/group_invites").to route_to("group_invites#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/group_invites/1").to route_to("group_invites#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/group_invites/1").to route_to("group_invites#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/group_invites/1").to route_to("group_invites#destroy", id: "1")
    end
  end
end
