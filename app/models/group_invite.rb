class GroupInvite < ApplicationRecord
  belongs_to :user

    scope :cofirmed_group_invite, -> {
    where('confirmed = ?', false)
  }
  scope :own_group_invite, ->(invitee) {
    where('invitee_id = ?', invitee)
  }
  scope :this_groups_invite, -> (group_id){
    where('group_id = ?', group_id)
  }
end
