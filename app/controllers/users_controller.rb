class UsersController < ApiController
  before_action :set_user, only: [:show, :update, :destroy, :notifications]

  # GET /users
  def index
    @users = User.all

    puts 'PRINTINGGGGGGGG SESSIONS'
    # p session
    p current_user.id
    p 'bing'
    # p user_session

    render json: @users
  end

  # GET /users/1
  def show
    # render_jsonapi_response(@user)

    render json: @user.to_json(include: [:groups, :owned_groups])
  end

  def notifications
    p 'hereeeeeee it starts in notifications'
    pending_group_invites = @user.pending_group_invites.map { |invite| invite.as_json.merge({:type =>'GroupInvite'})}
    userNames = User.all.select(:id, :first_name, :last_name)
    groupNames = Group.all.select(:id, :name)
    p userNames
    p pending_group_invites
    notifications = [pending_group_invites].flatten
    data = {notifications: notifications, userNames: userNames, groupNames: groupNames}
    render json: data.to_json
  end

  # # POST /users
  # def create
  #   @user = User.new(user_params)

  #   if @user.save
  #     render json: @user, status: :created, location: @user
  #   else
  #     render json: @user.errors, status: :unprocessable_entity
  #   end
  # end

  # # PATCH/PUT /users/1
  # def update
  #   if @user.update(user_params)
  #     render json: @user
  #   else
  #     render json: @user.errors, status: :unprocessable_entity
  #   end
  # end

  # # DELETE /users/1
  # def destroy
  #   @user.destroy
  # end

  # private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

  #   # Only allow a list of trusted parameters through.
  #   def user_params
  #     params.require(:user).permit(:first_name, :last_name)
  #   end
end
