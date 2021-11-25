class GroupInvitesController < ApiController
  before_action :set_group_invite, only: [:show, :update, :destroy]

  # GET /group_invites
  def index
    @group_invites = GroupInvite.all

    render json: @group_invites
  end

  # GET /group_invites/1
  def show
    render json: @group_invite
  end

  # POST /group_invites
  def create
    puts 'Create in group invites BOOOOOI'
    puts current_user.id
    p group_invite_params
    p params
    @group_invite = current_user.send_group_invite(group_invite_params)

    if @group_invite.save
      render json: @group_invite, status: :created, location: @group_invite
    else
      render json: @group_invite.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /group_invites/1
  def update
    if @group_invite.update(group_invite_params)
      render json: @group_invite
    else
      render json: @group_invite.errors, status: :unprocessable_entity
    end
  end

  # DELETE /group_invites/1
  def destroy
    @group_invite.destroy
  end

  private

    # MC added this in.
    def set_user
      @user = User.find(params[:id])
    end

    # Use callbacks to share common setup or constraints between actions.
    def set_group_invite
      @group_invite = GroupInvite.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def group_invite_params
      params.require(:group_invite).permit(:user_id, :invitee_id, :confirmed, :group_id)
    end
end
