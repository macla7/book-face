class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  # devise :database_authenticatable, :registerable,
  #        :recoverable, :rememberable, :validatable

  has_many :memberships
  has_many :groups, through: :memberships
  has_many :owned_groups, class_name: 'Group'

  devise :database_authenticatable, :registerable,
      :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist

  # think the below was somehow keeping my users logged in,
  # negating my jwt workings..
  self.skip_session_storage = [:http_auth, :params_auth]

end
