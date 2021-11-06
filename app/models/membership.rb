class Membership < ApplicationRecord
  belongs_to :user
  belongs_to :group

  enum role: [:general, :admin]

  after_initialize do
    if self.new_record?
      self.role ||= :general
    end
  end
end
