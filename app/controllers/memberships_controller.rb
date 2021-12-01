class MembershipsController < ApplicationController
  # POST /memberships
  def create
    @membership = Membership.new(membership_params)

    if @membership.save
      render json: @membership, status: :created, location: @membership
    else
      render json: @membership.errors, status: :unprocessable_entity
    end
  end

  private

    # Only allow a list of trusted parameters through.
    def membership_params
      params.require(:membership).permit(:user_id, :group_id, :role)
    end
end
