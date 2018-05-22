class RenameAgeGroupToBirthYear < ActiveRecord::Migration[5.1]
  def change
  	rename_column :refinery_registrations, :athlete_age_group, :athlete_birth_year
  end
end
