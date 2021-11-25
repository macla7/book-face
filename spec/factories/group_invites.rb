FactoryBot.define do
  factory :group_invite do
    user { nil }
    invitee { 1 }
    confirmed { false }
  end
end
