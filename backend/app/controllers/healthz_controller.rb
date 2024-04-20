# frozen_string_literal: true

class HealthzController < ApplicationController
  def show
    head :ok
  end
end
