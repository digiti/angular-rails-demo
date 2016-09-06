require 'active_record/validations.rb'

module API
  module V1
    module Defaults
      extend ActiveSupport::Concern

      included do
        version "v1", using: :path
        default_format :json
        format :json


        helpers do
          def logger
            Rails.logger
          end
        end

        rescue_from ActiveRecord::RecordNotFound do |e|
          error_response(message: "Record not found", status: 404)
        end

        rescue_from ActiveRecord::RecordInvalid do |e|
          error_response(message: {full_errors: e.record.errors.full_messages, grouped_errors: e.record.errors.messages}, status: 422)
        end

        rescue_from ActionController::UnpermittedParameters do |e|
          error_response(message: e.message, status: 401)
        end
      end

    end
  end
end
