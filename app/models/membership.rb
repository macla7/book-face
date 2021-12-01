class Membership < ApplicationRecord
  belongs_to :user
  belongs_to :group

  enum role: [:general, :admin]

  scope :my_memberships, ->(invitee) {
    where('user_id = ?', invitee)
  }
  scope :this_groups_memberships, -> (group_id) {
    where('group_id = ?', group_id)
  }


  after_initialize do
    if self.new_record?
      self.role ||= :general
    end
  end
end
