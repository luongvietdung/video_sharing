# frozen_string_literal: true

class NotificationChannel < ApplicationCable::Channel
  def subscribed
    stream_for 'general'
  end

  def unsubscribed; end
end
