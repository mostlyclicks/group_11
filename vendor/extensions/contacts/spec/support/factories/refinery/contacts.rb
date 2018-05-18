
FactoryGirl.define do
  factory :contact, :class => Refinery::Contacts::Contact do
    sequence(:full_name) { |n| "refinery#{n}" }
  end
end

