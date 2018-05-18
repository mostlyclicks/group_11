
module Refinery
  module Contacts
    class Contact < Refinery::Core::BaseModel
      self.table_name = 'refinery_contacts'



      alias_attribute :name, :full_name

      # Add some validation here if you want to validate the user's input
      # We have validated the first string field for you.
      validates :full_name, :presence => true

      DISCIPLINES = []
    end
  end
end
