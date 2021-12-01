class Group < ApplicationRecord
  belongs_to :user
  has_many :memberships
  has_many :member_users, through: :memberships, source: :user
end
