class User < ApplicationRecord
  has_many :memberships
  has_many :groups, through: :memberships
  has_many :owned_groups, class_name: 'Group'
end
