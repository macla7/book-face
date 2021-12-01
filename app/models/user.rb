class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  # devise :database_authenticatable, :registerable,
  #        :recoverable, :rememberable, :validatable

  validates :email, presence: true

  has_many :memberships
  has_many :groups, through: :memberships, source: :group
  has_many :owned_groups, class_name: 'Group'
  has_many :group_invites
  has_many :sent_groups_invites, -> { where confirmed: false}, class_name: 'GroupInvite', foreign_key: 'user_id'
  has_many :pending_group_invites, -> { where confirmed: false}, class_name: 'GroupInvite', foreign_key: 'invitee_id'

  devise :database_authenticatable, :registerable,
      :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist

  # think the below was somehow keeping my users logged in,
  # negating my jwt workings..
  self.skip_session_storage = [:http_auth, :params_auth]

  def send_group_invite(hash)
    group_invites.create(invitee_id: hash[:invitee_id], group_id: hash[:group_id])
  end

end
