
module Refinery
  module Registrations
    class Registration < Refinery::Core::BaseModel
      self.table_name = 'refinery_registrations'



      # def message was created automatically because you didn't specify a text field
      # when you ran the refinery:form generator. <3 <3 Refinery CMS.
      def message
        "New registration"
      end

      alias_attribute :name, :full_name

      # Add some validation here if you want to validate the user's input
      # We have validated the first string field for you.
      validates :full_name, :presence => true
      validates :email_address, :presence => true
      validates :phone_number, :presence => true
      validates :ussa_number, :presence => true
      validates :athlete_team_club_name, :presence => true
      validates :athlete_birth_year, :presence => true
      validates :athlete_coach_name, :presence => true

      ATHLETE_PREVIOUS_SPONSORSHIP_LEVELS = ['platinum', 'gold', 'silver', 'bronze', 'none']

      ATHLETE_PREVIOUS_SPONSORSHIP_BRANDS = ['Rossignol', 'Dynastar/Lange', 'Other']

      SPONSORSHIP_BRANDS = ['Rossignol', 'Dynastar/Lange']
    end
  end
end
