module Refinery
  module Registrations
    class Mailer < ::ActionMailer::Base

      def confirmation(registration, request)
        @registration = registration
        mail :subject  => Refinery::Registrations::Setting.confirmation_subject[locale.to_s],
             :to       => registration.email_address,
             :from     => "\"#{Refinery::Core.site_name}\" <no-reply@#{request.domain}>",
             :reply_to => Refinery::Registrations::Setting.notification_recipients.split(',').first
      end

      def notification(registration, request)
        @registration = registration
        mail :subject  => Refinery::Registrations::Setting.notification_subject,
             :to       => Refinery::Registrations::Setting.notification_recipients,
             :from     => "\"#{Refinery::Core.site_name}\" <no-reply@#{request.domain}>"
      end

    end
  end
end
